const data = [{"level":"biggener" , "color" : "#ffffff" } , {"level":"intermidate" ,"color" : "#ffffff"} , {"level":"advanced" , "color":"#ffffff"}]



function App() {

  return (
    <>
      <div className="min-w-screen min-h-screen bg-black flex justify-center items-center">
        <div className="border-2 border-white min-h-[300px] min-w-[100px] ">
          <h1 className="text-white font-mono w-full h-full text-center p-10">imagine my photo here </h1> 
          {data.map((el) => <ul><li style={{color:el.color}}>{el.level}</li></ul>)}



        </div>


      </div>
    </>
  )
}

export default App
