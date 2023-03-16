import "./ErrorPage.css"

function ErrorPage({ reason, statusCode }) {
  return (
    <main className="ErrorPage">
      <h2 className="ErrorCode">{statusCode}</h2>
      {
        reason === "invalid route" ?
        <>
          <p>That page could not be found.</p>
          <p>Please check the page address.</p> 
        </> :
        reason === "article not found" ?
        <>
          <p>The article you were looking for does not exist.</p>
        </> :
        reason === "invalid article id" ?
        <>
          <p>That article could not be found.</p>
          <p>Please check the page address.</p>
        </> :
        reason === "topic not found" ?
        <>
          <p>The topic you were looking for does not exist.</p>
        </> :
        <></>
      }
    </main>
  )
}

export default ErrorPage;