// const fetcher = (...args) => fetch(...args).then((res) => res.json())

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init,)
  return res.json()
}

export default fetcher
