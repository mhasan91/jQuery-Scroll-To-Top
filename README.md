# jQuery-Scroll-To-Top
scroll to top icon appears on scrolling the window. this functionality is achieved using jQuery.
.
This uses the scroll function which is ran when the visitor scrolls the window. We can then work out the position of the window by using the scrollTop function, if the position is move than 100 then we want to display the button.

We display the button by using the fadeIn function to add the first bit of animation to the screen. If the scrollTop is less than 100 then we know that the window is near the top so we don't need to display the button.

Now we can add a click event to the scroll to top button. On the click action of this button we want to scroll the page back to the top n animation by using the animate function. To scroll back to the top of the window we need to change scrollTop property to 0.

That's all you need to recreate this very useful feature, view the demo to see what it will create.
