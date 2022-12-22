import { useEffect, useState } from 'react';
import axios from 'axios';

function Types() {

  const [usePass, SetusePass] = useState([]);
  const [title, setTitle] = useState('');

  const PostTypes = async () => {


    let response = await axios({
      method: 'post',
      url: 'http://localhost:5000/transport/create',
      data: {
        name: title,

      }
    })
      

  };


  const getTypes = async () => {


    let response = await axios({
      method: 'get',
      url: 'http://localhost:5000/transport/passes',

    })
      .then((data) => {






        console.log(data);



        SetusePass(data.data);




      });

  };





  useEffect(() => {

    getTypes();

    console.log(usePass);



  }, []);

  console.log("usePass");
  console.log(usePass);


  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');

    PostTypes();

    console.log(usePass);
  }






  return (
    <div class="h-screen bg-gradient-to-b from-green-200 to-green-500" >
      <input type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New type" required value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSubmit} type="Add new Type" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


      {usePass.map((usePass) => {
        return (
          <div >
            <h2>name: {usePass.name}</h2>

            <hr />
          </div>
        );
      }




      )}
      



    </div>


  );
}

export default Types;
