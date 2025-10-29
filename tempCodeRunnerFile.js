ta', { signal })
  .then(res => res.json())
  .then(data => console.log('Got:', data))
  .catch(err => {
    if (err.name === 'AbortError') console.log('Fetch aborted');
    else console.error('Fetch error', err);
  });

// Later, to cancel:
controller.abort();

