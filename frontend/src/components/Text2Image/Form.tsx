import { Button, createStyles, Group, Stack, TextInput, Title } from '@mantine/core';
import React, { useState } from 'react';

const styles = createStyles(() => ({
  form: {
    width: '90vw',
    height: '100vh',
  },
}));

function Form() {
  const { classes } = styles();
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      prompt: data.get('prompt'),
    });
  };

  return (
    <Stack className={classes.form}>
      <Title order={1}>Text To Image</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Enter your prompt here"
          radius="md"
          value={prompt}
          onChange={(event) => setPrompt(event.currentTarget.value)}
        />
        <Group position="right">
          <Button variant="subtle" compact>
            Prompt Ideas
          </Button>
          <Button variant="subtle" compact>
            Styles
          </Button>
          <Button variant="subtle" compact>
            Options
          </Button>
          <Button type="submit">Generate</Button>
        </Group>
      </form>
    </Stack>
  );
}

export default Form;
