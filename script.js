console.log('Start fetching')
fetch('/data.json')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(() => console.error('Failed to fetch data'))
    .finally(() => console.log('Stop fetching'))