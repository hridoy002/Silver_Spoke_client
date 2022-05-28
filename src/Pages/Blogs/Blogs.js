import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:mx-40 my-20'>

            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-bold'>
                    There many tricks to improve a react application: <br />    
                    1.Cut all unecessary package. <br />
                    2.Prevent unnecessary re-renders <br />
                    3.Make sure component receive only necessary props. <br />

                    </p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p className='text-lg text-primary-focus font-bold'>There are different types of way to manage a state in a react app: <br />
                    1.useState <br />
                    2.useReducer <br />
                    3.customHook <br />
                    4.useEffect <br />
                    5.useLocation
                    </p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-bold text-primary'> Prototypical inheritence is a feature of JavaScript.It is add methods and properties in objects.</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-bold text-primary'>I do not set the state directly in React.Because If I set state directly,it does not change this state immidietly. <br />
                    I will lose control of the state.As a result,it will not work properly.</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-bold text-primary'>For searching  products from array I use there filter method.Because of using filter method easily find a products object.
                    
                    </p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                <div className="collapse-title text-xl font-medium">
                What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-bold text-primary'>Unit testing is a development process.When testing every individual small parts of a project/software its called Unit Test. 

                    Because its help to make perfect of a software with avoiding vulnerable situation. 
                    </p>
                </div>
            </div>
        </div>



    );
};

export default Blogs;


// const products = [{
//     name: 'Bat',
//     price: 700,
//     description: 'Kashmiri willow'
// },{
//     name: 'Ball',
//     price: 700,
//     description: 'Kokabura sd ball'
// },
// {
//     name: 'Stump',
//     price: 700,
//     description: 'Wooden'
// }];

// const search = products.filter(product => product.name == 'Bat');
// console.log(search)