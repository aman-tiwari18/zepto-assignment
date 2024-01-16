// import React, { useState, useRef, useEffect } from "react";

// const Chips = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [chips, setChips] = useState([]);
//   const [availableItems, setAvailableItems] = useState([
//     "Item 1",
//   "Item 2",
//   "Item 3",
//   "Item 4",
//   "Item 5",
//   "Item 6",
//   "Item 7",
//   "Item 8",
//   "Item 9",
//   "Item 10",
//     // Add more items as needed
//   ]);
//   const [showItemList, setShowItemList] = useState(false);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (inputRef.current && !inputRef.current.contains(event.target)) {
//         setShowItemList(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     setShowItemList(true);
//   };

//   const handleInputClick = () => {
//     setShowItemList(true);
//   };

//   const handleItemClick = (item) => {
//     setChips((prevChips) => [...prevChips, item]);
//     setAvailableItems((prevItems) => prevItems.filter((i) => i !== item));
//     setInputValue("");
//     setShowItemList(false);
//   };

//   const handleChipRemove = (chip) => {
//     setChips((prevChips) => prevChips.filter((c) => c !== chip));
//     setAvailableItems((prevItems) => [...prevItems, chip]);
//   };

//   return (
//     <div className="w-full flex justify-center items-center flex-col ">
//       <div className="text-4xl font-bold text-blue-500">
//         Pick Users
//       </div>
//     <div className="w-3/4 mx-auto mt-8 bg-white p-6 rounded-lg ">
//       <div className="relative flex flex-wrap">
//         {chips.map((chip) => (
//           <div
//             key={chip}
//             className="bg-gray-300 text-black p-1 px-2 m-1 flex items-center rounded-full"
//           >
//             {chip}
//             <span
//               className="ml-2 cursor-pointer"
//               onClick={() => handleChipRemove(chip)}
//             >
//               X
//             </span>
//           </div>
//         ))}
//         <div className="relative w-full" ref={inputRef}>
//           <input
//             type="text"
//             className="w-full p-3 mb-6 border-b-2 rounded focus:outline-none border-blue-500 transition duration-300  "
//             placeholder="Add new User"
//             value={inputValue}
//             onChange={handleInputChange}
//             onClick={handleInputClick}
//           />
//           {showItemList && (
//             <ul className="absolute left-0 right-0 mt-2 bg-white border rounded border-gray-300 shadow-md w-1/2">
//               {availableItems
//                 .filter((item) =>
//                   item.toLowerCase().includes(inputValue.toLowerCase())
//                 )
//                 .map((item) => (
//                   <li
//                     key={item}
//                     className="cursor-pointer hover:bg-gray-200 p-3 transition duration-300"
//                     onClick={() => handleItemClick(item)}
//                   >
//                     {item}
//                   </li>
//                 ))}
//             </ul>
//           )}
//         </div>
//       </div>
//       </div>
//       </div>
//   );
// };

// export default Chips;



import React, { useState, useRef, useEffect } from "react";
import usersData from "../constants/UserData";

const Chips = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [userData, setUserData] = useState(usersData);
  const [showUserList, setShowUserList] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowUserList(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowUserList(true);
  };

  const handleInputClick = () => {
    setShowUserList(true);
  };

  const handleUserClick = (user) => {
    setChips((prevChips) => [...prevChips, user]);
    setUserData((prevUsers) => prevUsers.filter((u) => u !== user));
    setInputValue("");
    setShowUserList(false);
  };

  const handleChipRemove = (chip) => {
    setChips((prevChips) => prevChips.filter((c) => c !== chip));
    setUserData((prevUsers) => [...prevUsers, chip]);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="text-4xl font-bold text-blue-500">Pick Users</div>
      <div className="w-3/4 mx-auto mt-8 bg-white p-6 rounded-lg">
        <div className="relative flex flex-wrap">
          {chips.map((user) => (
            <div
              key={user.name}
              className="bg-gray-300 text-black p-1 px-2 m-1 flex items-center rounded-full"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              {user.name}
              <span
                className="ml-2 cursor-pointer"
                onClick={() => handleChipRemove(user)}
              >
                X
              </span>
            </div>
          ))}
          <div className="relative w-full" ref={inputRef}>
            <input
              type="text"
              className="w-full p-3 mb-6 border-b-2 rounded focus:outline-none border-blue-500 transition duration-300"
              placeholder="Add new User"
              value={inputValue}
              onChange={handleInputChange}
              onClick={handleInputClick}
            />
            {showUserList && (
              <ul className="absolute left-0 right-0 mt-2 bg-white border rounded border-gray-300 shadow-md w-1/2 ">
                {userData
                  .filter((user) =>
                    user.name.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((user) => (
                    <li
                      key={user.name}
                      className="cursor-pointer hover:bg-gray-200 p-3 transition duration-300 flex flex-row gap-7"
                      onClick={() => handleUserClick(user)}
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {user.name}
                      <span className="ml-2 text-gray-500">{user.email}</span>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chips;
