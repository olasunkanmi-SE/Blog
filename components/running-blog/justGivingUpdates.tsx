async function getTimelineData() {
  const res = await fetch("", { next: { revalidate: 600 } })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function JustGivingUpdates() {
  const posts = await getTimelineData()
  const timeline = posts.data.page.timeline.nodes

  return (
    <>
      {timeline &&
        timeline.map(
          (
            item: { id: string; message: string; media: [{ url: string }] },
            index: number
          ) => {
            const updateCount = timeline.length - index
            return (
              <>
                <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-black dark:text-white">
                  Update {updateCount}
                </h3>

                <p
                  key={item.id}
                  dangerouslySetInnerHTML={{
                    __html: item.message.replace(/\n/g, "<br />"),
                  }}
                  className="mt-2"
                ></p>
                {item?.media[0]?.url && (
                  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/img-redundant-alt
                  <img
                    className="mx-auto my-3 w-full max-w-[500px]"
                    src={item.media[0].url}
                    alt={`update ${updateCount}`}
                    loading="lazy"
                  />
                )}
              </>
            )
          }
        )}
    </>
  )
}
