// your code here!

function handleFormClick() {

    $('.js-analyze-text').click(function(event) {

        event.preventDefault(); // in case there's already results
        var stringText = $("textarea").val(); // get entered text
        //var wordArray = stringText.split(" ");                         // split sentences into array of individual words, did not give right results
 		var wordArray = stringText.replace( /\n/g, " " ).split( " " );  // split sentences into array of individual words ignoring line break 

        $("dl").removeClass('hidden');
        calculateWordCount(wordArray); //calculate total word count in text area
        calculateUniqueWordCount(wordArray); //calculate unique word count in text area
        calculateAverageWordLength(wordArray); //calculate average word length in text area

        var numberOfLineBreaks = (stringText.match(/\n/g)||[]).length;

        calculateAverageSentenceLength(wordArray, numberOfLineBreaks); //calculate average sentence length in text area

    });
}

function calculateWordCount(wordArray) {

    var wordCount = 0;

    wordCount = wordArray.length;
    $('.js-word-count').text(wordCount);

}

function calculateUniqueWordCount(wordArray) {

    var uniqueWordCount = 0;
	var priorWord;
	 
    wordArray.sort(); //sort word array
    console.log(wordArray); 

    for (var i = wordArray.length - 1; i >= 0; i--) {

        if (priorWord != wordArray[i]) { //loop over array and increment counter each time
            console.log(priorWord); 
            uniqueWordCount++; //an unique word is encountered
            priorWord = wordArray[i]; //keep track of last word
        }

    }

    $('.js-unique-word-count').text(uniqueWordCount);

}

function calculateAverageWordLength(wordArray) {

    var averageWordLength = 0;
    var totalTextLength = 0;

    for (var i = wordArray.length - 1; i >= 0; i--) {

        var wordLength = wordArray[i].length;
        totalTextLength += wordLength;
    }

    averageWordLength = totalTextLength / wordArray.length;
    $('.js-average-word-length').text(averageWordLength);

}

function calculateAverageSentenceLength(wordArray, numberOfLineBreaks) {

    var averageSentenceLength = 0;
    var totalTextLength = 0;
    for (var i = wordArray.length - 1; i >= 0; i--) {
    	
    	var wordLength = wordArray[i].length;
    	totalTextLength += wordLength;
     }
	
    averageSentenceLength = totalTextLength / ( numberOfLineBreaks + 1 );
    $('.js-average-sentence-length').text(averageSentenceLength);
}

$(function() {
    handleFormClick();
});
