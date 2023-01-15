"""
Starts the application
"""
import os
from io import BytesIO
import base64
import uvicorn
from auth_token import AUTH_TOKEN
from core.routers import router
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import torch
from diffusers import StableDiffusionPipeline


app = FastAPI(
    title="Cover-AI",
    docs_url="/docs"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DEVICE = "mps"
MODEL_ID = "runwayml/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(
    MODEL_ID, torch_dtype=torch.float16, revision="fp16", use_auth_token=AUTH_TOKEN)
pipe = pipe.to(DEVICE)

# Recommended if your computer has < 64 GB of RAM
pipe.enable_attention_slicing()

TEST_PROMPT = "a photo of an astronaut riding a horse on mars"

# First-time "warmup" pass (see explanation above)
_ = pipe(TEST_PROMPT, num_inference_steps=1)


@app.get("/", tags=["Hello World"])
async def root():
    return {"message": "Hello World"}


@app.get("/generate")
async def generate(prompt: str):
    image = pipe(prompt).images[0]

    image.save("./images/testimage.png")

    return {"out": "Hello World !"}


# Inclure les routes définies dans le dossier routers de core
app.include_router(
    router,
    prefix="",
)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8000)
