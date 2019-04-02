export const getIP = url => {
  const body = fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
  return body;
};
