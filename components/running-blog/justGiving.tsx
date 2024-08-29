async function getPageData() {
  const res = await fetch("", { next: { revalidate: 600 } })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function JustGiving() {
  const data = await getPageData()
  const percentage = (
    data.data.page.donationSummary.totalAmount.value / 1000
  ).toFixed(2)
  const value = data.data.page.donationSummary.totalAmount.value / 100
  const giftAid =
    data.data.page.donationSummary.totalMatched[0].amount.value / 100

  return (
    <>
      <div className="mb-1 mt-3 text-lg font-medium dark:text-white">
        £{value} raised of £1,000 target
      </div>
      <div className="h-6 w-full rounded-full bg-gray-400 dark:bg-gray-700">
        <div
          className="flex h-6 items-center justify-center rounded-full bg-amber-600 p-0.5 text-center text-xs font-medium leading-none text-amber-100"
          style={{
            width: `${Number.parseInt(percentage) >= 100 ? 100 : percentage}%`,
          }}
        >
          <p className="text-md h-fit">{percentage}%</p>
        </div>
      </div>
      <span className="text-xs">(plus £{giftAid} Gift Aid)</span>
      <a
        href="abc"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 mt-3 inline-flex w-full items-center justify-center rounded-lg bg-amber-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-yellow-950 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Donate on JustGiving
      </a>
    </>
  )
}
