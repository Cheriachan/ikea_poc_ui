import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login_Page from "./Components/Login_Page";
import Signup_Page from "./Components/Signup_Page";
import Home_page from "./Components/Home_page";
import * as Minio from "minio";
import { useEffect} from "react";
import Bucket from "./Components/Bucket";
import mc from "./utils/mc";




//Const bucketname

//make a bucket called as IKEA_Frontend
const createBucket = async(Bucketname)=>{
  try{
    mc.makeBucket(Bucketname,'us-east-1',)
  }catch(err){
    console.log('Error creating the bucket',err);
  }
}
const getbucketlist=async()=>{
  try{
    const res=await mc.listBuckets();
    console.log(res);
  }catch(err){
    console.log("Cannot get the bucketlist due to",err)
  }
}

const metaData = {
  'Content-Type': 'image/jpeg',
  'X-Amz-Meta-Testing': '1234',
  example: '5678'
}
const uploadFile=async()=>{
  try{
    mc.putObject('juice-test','token_1.jpeg',"./token_1.jpeg",metaData,function(err,response){
      if(err){
        console.log("error in uploading the file",err)
      } else{
        console.log("image uploaded successfully:",response)
      }
    })
  }catch(err){
    console.log(err);
  }
}


function App() {
/*Setting up bucket using the useState*/

useEffect(()=>{


  //uploadFile();
 //createBucket('ikea');
 getbucketlist();
 
})
  /**Configuring router with dependencies */
  const route=createBrowserRouter([{
    path:"/",
    element:<Login_Page></Login_Page>
  },{
    path:"/signup",
    element:<Signup_Page></Signup_Page>
  },
  {
    path:"/Bucket",
    element:<Bucket></Bucket>
  },
{
  path:"/Home",
  element:<Home_page></Home_page>
}])
  return (
    <div className="w-full h-full ">
      
<RouterProvider router={route}/>
    </div>
  );
}

export default App;
