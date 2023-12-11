const getSummary = async ({ text }: { text: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADDRESS}/api/ai`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }),
      },
    )

    return await response.json()
  } catch (error) {
    console.log(error)
    return {
      data: '요약이 제공되지 않는 문서입니다.',
    }
  }
}

export { getSummary }
