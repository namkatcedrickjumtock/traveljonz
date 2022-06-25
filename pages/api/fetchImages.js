// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


export const getStaticProps = async () => {
  fetch("https://source.unsplash.com/random/&per_page=30&orientation=landscap").then((res) => {

  return   res.json()}
    )
    .then((resp) => console.log(resp))

}