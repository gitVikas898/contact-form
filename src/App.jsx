import "./App.css";

function App() {
  return (
    <>
      <div className=" font-karla min-h-screen grid place-items-center bg-primaryGreenLighter ">
        <div className="bg-neutralWhite p-6 rounded-lg">
          <form action="" className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">Contact Us</h1>
            <div id="Name Box" className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="Name" className="">
                  First Name
                </label>
                <input
                  type="text"
                  name="Name"
                  className="outline-none px-4 py-2 rounded-md border border-solid  border-grey500"
                />
                <p>Error Message Here</p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="Name">Last Name</label>
                <input
                  type="text"
                  name="Name"
                  className="outline-none px-4 py-2 rounded-md border border-solid  border-grey500"
                />
                <p>Error Message Here</p>
              </div>
            </div>
            <div id="email-box" className="flex flex-col gap-1">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="Email"
                className="outline-none px-4 py-2 rounded-md border border-solid  border-grey500"
              ></input>
              <p>Error Message Here</p>
            </div>
            <div id="query-type" className="flex flex-col gap-1">
              <p>Query type</p>
              <div className="flex gap-5">
                <div
                  id="left-box"
                  className="w-full px-4 py-4 rounded-md border border-solid  border-grey500 flex items-center"
                >
                  <div
                    id="Circle"
                    className="border border-solid border-grey500 w-4 h-4 rounded-full"
                  ></div>
                </div>

                <div
                  id="right-box"
                  className="w-full p-3 rounded-md border border-solid  border-grey500 flex items-center"
                >
                  <div
                    id="Circle"
                    className="border border-solid border-grey500 w-4 h-4 rounded-full"
                  ></div>
                </div>
              </div>
              <p>Error Message Here</p>
            </div>
            <div id="message-box" className="flex flex-col  gap-1">
              <p>Message</p>
              <textarea
                className="w-full p-4 border border-grey500 rounded-md outline-none"
                rows="2"
                placeholder="Your custom message here..."
              ></textarea>
              <p>Error Message Here</p>
            </div>
            <div id="constent-box" className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div id="square" className="border border-solid broder-grey500 w-5 h-5"></div> <p> I consent to being contacted by the team To submit this form</p>
                </div>
                <p>Error Message Here</p>
            </div>
            <button className="p-3 bg-primaryGreenMedium text-neutralWhite rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
