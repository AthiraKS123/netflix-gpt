import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
    <Header/>
    <div className='absolute' >
      
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg" alt="logo" />
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" :"Sign Up"}</h1>
      {isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700' />)}
      <input type="text" placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700' />
      
      <input type="password" placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />
      <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" :"Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix Sign Up" :"Already registered ? Sign In Now"}</p>

    </form>
    </div>
 
  )
}

export default Login












// mx-auto
// What it does: Sets the left and right margins of the element to auto.
// Behavior: This is commonly used to center an element horizontally within its containing block. However, for this to work, the element's display property should typically be block (or something similar) and it should have a defined width.
// Example:
// html

// <div class="container">
//   <div class="mx-auto w-1/2">Centered Element</div>
// </div>
// In this example, the inner div is centered within the container div because mx-auto sets the left and right margins to auto, effectively distributing the available space equally on both sides.
// right-0
// What it does: Sets the right edge of the element to be 0 units away from the right edge of its containing block.
// Behavior: When an element is positioned absolutely, right-0 ensures that the right side of the element is aligned with the right edge of its nearest positioned ancestor. This is useful for positioning elements flush against the right side.
// Example:
// html

// <div class="relative">
//   <div class="absolute right-0">Aligned Right</div>
// </div>
// In this example, the inner div is positioned absolutely within the outer div and aligned to the right side of the outer div.
// left-0
// What it does: Sets the left edge of the element to be 0 units away from the left edge of its containing block.
// Behavior: Similar to right-0, but aligns the left side of the element with the left edge of its nearest positioned ancestor. This is useful for positioning elements flush against the left side.
// Example:
// html

// <div class="relative">
//   <div class="absolute left-0">Aligned Left</div>
// </div>
// In this example, the inner div is positioned absolutely within the outer div and aligned to the left side of the outer div.
// Combining left-0 and right-0
// When you use both left-0 and right-0 together on an absolutely positioned element, you force the element to stretch to fill the full width of its containing block.

// Behavior: The element's left edge will be aligned with the left edge of the container, and its right edge will be aligned with the right edge of the container.
// Example:
// html

// <div class="relative">
//   <div class="absolute left-0 right-0">Full Width Element</div>
// </div>
// In this example, the inner div will stretch to occupy the full width of the outer div, since both left-0 and right-0 are applied.
// Putting It All Together with mx-auto, right-0, and left-0
// In the context of your original class string (mx-auto, right-0, and left-0), these behaviors can seem contradictory. However, mx-auto is usually ineffective on absolutely positioned elements because their position is controlled by left, right, top, and bottom. Here's a clearer example:

// html

// <div class="relative h-64">
//   <div class="absolute left-0 right-0 mx-auto w-3/12 p-12 bg-black my-36">
//     Centered and Full Width Element
//   </div>
// </div>
// In this example:

// The inner div is absolutely positioned within the outer div.
// left-0 and right-0 make it span the full width of the outer div.
// mx-auto here does not affect the positioning due to the absolute positioning context, but if left-0 and right-0 were removed, mx-auto would attempt to center the element horizontally.