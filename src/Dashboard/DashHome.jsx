import {useState,useEffect} from "react";
const DashHome = (props) => {
    const [foodCount,setFoodCount] = useState(0);
    const [requestCount, setRequestCount] = useState(0);
    const [pendingCount,setPendingCount] = useState(0);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await fetch(
                    "https://food-sharing-server-nine.vercel.app/foodCount"
                );
                const data = await response.json();
                setFoodCount(data.count);

                const response2 = await fetch(
                    "https://food-sharing-server-nine.vercel.app/requestCount");
                const data2 = await response2.json();
                setRequestCount(data2.count);
                 const response3 = await fetch(
                     "https://food-sharing-server-nine.vercel.app/pendingfoods"
                );
                const data3 = await response3.json();
                setPendingCount(data3.length);
            }
            catch (error) { 
                console.error(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])
    if (loading) {
        return (
            <div className="flex w-screen justify-center items-center h-screen">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }
    return (
        <div className="flex flex-col justify-center items-center p-10">
            <h1 className='text-3xl font-bold'>Dashboard Home</h1>
            <div className='flex gap-4'>
                <p className="bg-secondary flex flex-col justify-center mt-5 items-center rounded-xl w-60 h-40">
                    <p className="text-2xl font-bold">Available Food </p>

                    <p className="text-2xl font-bold">{foodCount}</p>
                </p>
                <p className="bg-secondary flex flex-col justify-center mt-5 items-center rounded-xl w-60 h-40">
                    <p className="text-2xl font-bold">Requested Food </p>

                    <p className="text-2xl font-bold">{requestCount}</p>
                </p>
                <p className="bg-secondary flex flex-col justify-center mt-5 items-center rounded-xl w-60 h-40">
                    <p className="text-2xl font-bold">Pending Food </p>

                    <p className="text-2xl font-bold">{pendingCount}</p>
                </p>
            </div>
        </div>
    );
};

DashHome.propTypes = {};

export default DashHome;
