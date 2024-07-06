//! 1:
// const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc, item) => {
//   console.log(acc);
//   return acc + item;
// }, 0);

// console.log("Final result =>", result);

//! 2:
// const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc, item) => {
//   acc.push(acc + item);
//   return acc;
// }, []);

// console.log("Final result =>", result);

//! 3:
const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE-FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

// const newArray = adminPaths2.reduce((acc, item) => {
//     if (item.path && item.element) {
//       acc.push({
//         path: item.path,
//         element: item.element,
//       });
//     }

//     if (item.children) {
//       item.children.forEach((child) => {
//         acc.push({
//           path: child.path,
//           element: child.element,
//         });
//       });
//     }

//     return acc;
//   }, []);

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: "NAVLINK " + item.path,
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child)=> ({
//         key: child.name,
//         label: 'NAVELINK ' + child.path
//       }))
//     });
//   }

//   return acc;
// }, []);

// // console.log(newArray);
// console.log(JSON.stringify(newArray));


//* serealizer object
const obj = {
  name: "anamul",
  role: "Admin",
  age: 20,
};
console.log(JSON.stringify(obj));

//* non-serealizer object (means konu dhoroner data missing hote pare)
const obj2 =  {
  name: "anamul",
  role: "Admin",
  age: 20,
  greet: ()=>{
    return 'Hello world'
  }
};
console.log(JSON.stringify(obj2));
