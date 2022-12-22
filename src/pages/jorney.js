import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Jorney() {

  const [usePass, SetusePass] = useState([]);


  const [title, setTitle] = useState('');




  const getPassesSorting = async () => {


    let response = await axios({
      method: 'post',
      url: 'http://localhost:5000/pass/SortingPasses',
      data: {


        departure: title,

      }
    })
      .then((data) => {





        console.log(data);


        SetusePass(data);




      });

  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
  };


  let bodyContent = JSON.stringify({

    departure: title
  });


  useEffect(() => {

   // getPassesSorting();

    console.log(usePass);



  }, []);

  console.log("usePass");



  console.log(usePass);


  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');

    getPassesSorting();

    console.log(usePass);
  }



  return (
    <div class="h-screen bg-gradient-to-b from-green-200 to-green-500" >

      <form>
        <div class="grid gap-6 mb-6 content-center px-60">
        <h2 className="text-3xl font-bold content-center  " >Add destination</h2>

          <label for="destination" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Destination" required value={title}
            onChange={(e) => setTitle(e.target.value)} />

<button onClick={handleSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


            
{usePass.data}
        </div>
       
      </form>
      
    </div>
  );
}

export default Jorney;
