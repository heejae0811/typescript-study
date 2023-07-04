new Promise((resolve, reject) => {
  console.log('Initial');
})
  .then(() => {
    throw new Error('Something failed');
  })
  .catch(() => {
    console.log('Do that');
  })
  .then(() => {
    console.log('Do this, whatever happened before');
  });
