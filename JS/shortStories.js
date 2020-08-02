// let firstHeading = document.getElementById("first-heading");
// console.log(firstHeading);
// console.log(firstHeading.getBoundingClientRect());

// let numberOfScans = 1

function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -150; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function isLeaving(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = 200;

    if(elementBox.top < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function isReturning(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = 150

    if(elementBox.top > distanceFromTop) {
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
        if(isLeaving(section)) {
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


        
    // console.log(numberOfScans);
    // numberOfScans++;


window.addEventListener('load', scanDocumentDown);
document.addEventListener('wheel', scanDocumentDown);
document.addEventListener('wheel', scanDocumentUp);
document.addEventListener('wheel', scanDocumentReanimate)


// function throttle(fn, wait) {
//     var time = Date.now();
//     return function() {
//       if ((time + wait - Date.now()) < 0) {
//         fn();
//         time = Date.now();
//       }
//     }
//   }
