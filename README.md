Description
This mobile application is a book library that allows users to search for books and view a list of already read books. The application consists of two main pages: Home Page and Search Page.

Home Page
Features:
Search Bar: Users can search for books by title.
List of Books: A list of books is displayed as cards, containing the book cover, title, author, published year, and a dynamic book status button.
Book Status Button:
The book status button toggles between "Read" and "Unread" when clicked.
If the book status is read, the button turns green with the text "Read".
If the book status is unread, the button is transparent with a border.
Rendering Book List:
The list of books is obtained from the Open Library API.
Each book's cover is fetched using the cover_id from the cover API.
Search Page
Clicking on the search bar on the home page allows users to search for books by title.
The search results are displayed in a list similar to the home page UI.