// let firstHeading = document.getElementById("first-heading");
// console.log(firstHeading);
// console.log(firstHeading.getBoundingClientRect());

// let numberOfScans = 1

function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -100; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function isLeavingTop(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = 350;

    if(elementBox.bottom < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function isReturning(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = 300

    if(elementBox.bottom > distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function isLeavingBottom(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromBottom = 150; 

    if(elementBox.bottom < distanceFromBottom) {
        return true;
    } else {
        return false;
    }
}

function scanDocumentDown() {
    let fadeInList = document.querySelectorAll('.section');
    fadeInList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden')
        } else {
            section.classList.add('hidden')
        };

        
    })
    };

function scanDocumentUp() {
    let fadeOutList = document.querySelectorAll('.section');
    fadeOutList.forEach(function(section) {
        if(isLeavingTop(section)) {
            section.classList.add('fadeOut')
        }
    })
}

function scanDocumentReanimate() {
    let reanimateList = document.querySelectorAll('.section');
    reanimateList.forEach(function(section) {
        if(isReturning(section)) {
            section.classList.remove('fadeOut')
        }
    })
}

function hasLeftAgain() {
    let visibleList = document.querySelectorAll('.section');
    visibleList.forEach(function(section) {
        if(isLeavingBottom(section)) {
            visibleList.classList.add('fadeOut')
        }
    })
}


        
    // console.log(numberOfScans);
    // numberOfScans++;


window.addEventListener('load', scanDocumentDown);
document.addEventListener('wheel', scanDocumentDown);
document.addEventListener('wheel', scanDocumentUp);
document.addEventListener('wheel', scanDocumentReanimate);


// function throttle(fn, wait) {
//     var time = Date.now();
//     return function() {
//       if ((time + wait - Date.now()) < 0) {
//         fn();
//         time = Date.now();
//       }
//     }
//   }
