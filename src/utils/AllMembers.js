 import useInterceptor from "../Hooks/useInterceptor"; 

 
 const AllMembers = async() => {
    const axiosInterceptor=useInterceptor()
    const res=await axiosInterceptor.get(`${import.meta.env.VITE_SERVER}members`)
    // console.log(res.data)
    return await res.data
 };
 
 export default AllMembers;