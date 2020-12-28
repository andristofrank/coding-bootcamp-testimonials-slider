const navigation = document.getElementById('btn-navigation');

navigation.addEventListener('click', () => {
    var image = document.getElementById('tanya-pic');

    var quoteText = document.getElementById('quote-text');
    var quoteTextTanya = "“ I’ve been interested in coding for a while but never taken the jump, until now. \n I couldn’t recommend this course enough. I’m now in the job of my dreams and so \n excited about the future. ”";

    var quotePerson = document.getElementById('quote-person');
    var quotePersonTanya = "Tanya Sinclair";

    var personTitle = document.getElementById('person-title');
    var personTitleTanya = "UX Engineer";

    if(image.alt == "Tanya") {
        image.src = "assets/image-john.jpg";
        image.alt = "John";
        quoteText.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. \n The depth the instructors go into is incredible. I now feel so confident about \n starting up as a professional developer. ” "
        quotePerson.innerHTML = "John Tarkpor";
        personTitle.innerHTML = "Junior Front-end Developer";
    } else {
         image.src = "assets/image-tanya.jpg";
         image.alt = "Tanya";
         quoteText.innerHTML = quoteTextTanya;
         quotePerson.innerHTML = quotePersonTanya;
         personTitle.innerHTML = personTitleTanya;
    }
});