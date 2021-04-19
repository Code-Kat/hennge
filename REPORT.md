I decided to use React to make this mockup, because it’s the library I prefer working with.
I created a separate fill for the email array, but in a real situation this would come from a database. This mockup can check for emails written between certain dates, but only works once, meaning the page needs to be refreshed to search again. Again, in a real situation, this is not efficient at all and more logic would be needed to provide a good user experience.

I created an Email component and mapped over it to show the emails. I used media queries to modify the design for smaller screens, using a screen width of 700px as the main break-point.

The email body can be inspected by clicking the email. It can also be hidden in this same way.

I ended up using an external icon because I could did not see any folder icon in the icons provided.
