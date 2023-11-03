const SLIDER_WIDTH = 1000;
const SLIDER_HEIGHT = 800;
const BLOCK = {
width: SLIDER_WIDTH / 2,
height: SLIDER_HEIGHT / 2
};
const BUTTON = {
    width: 50,
    height: 50
}

const siviBlok = document.createElement('div');
siviBlok.style.background = 'grey';
siviBlok.style.width = SLIDER_WIDTH + 'px';
siviBlok.style.height = SLIDER_HEIGHT + 'px';
siviBlok.style.position = 'absolute';
siviBlok.style.zIndex = 1;
siviBlok.style.top = (window.innerHeight - SLIDER_HEIGHT) / 2 + 'px';
siviBlok.style.left = (window.innerWidth - SLIDER_WIDTH) / 2 + 'px';

document.body.appendChild(siviBlok);

function createBlock(color, text){
    const block = document.createElement('div');
    siviBlok.appendChild(block);
    block.style.background = color;
    block.style.width =  BLOCK.width + 'px'
    block.style.height = BLOCK.height + 'px'
    block.style.position = 'absolute';
    block.style.zIndex = 2;
    block.innerHTML = text;
    block.style.top = (SLIDER_HEIGHT - BLOCK.height) / 2 + 'px';
    block.style.left = (SLIDER_WIDTH - BLOCK.width) / 2 + 'px';
    return block;
}

function createButton(text){
    const button = document.createElement('button');
    siviBlok.appendChild(button);
    button.style.position = 'absolute';
    button.style.width = BUTTON.width + 'px';
    button.style.height = BUTTON.height + 'px';
    button.innerHTML = text;
    button.style.top = SLIDER_HEIGHT / 2 - BUTTON.height + 'px';
    return button;
}

const nextButton = createButton('Next');
nextButton.style.right = 0;
const previousButton = createButton('Prev');
previousButton.style.left = 0;

const redBlock = createBlock('red', 'First block');
const greenBlock = createBlock('green', 'Second block');
const blueBlock = createBlock('blue', 'Third block');
redBlock.style.display = 'block'
greenBlock.style.display = 'none';
blueBlock.style.display = 'none';

const blocks = [redBlock, greenBlock, blueBlock];

nextButton.addEventListener('click', function(){
    const currentBlock = blocks.find(
        (block) => block.style.display === 'block'
    );
    currentBlock.style.display = 'none';

    const currentIndex = blocks.findIndex(
        (block) => block === currentBlock
    );

    let index = currentIndex + 1;
    if(index >= blocks.length) index = 0;
    const nextBlock = blocks[index];
    nextBlock.style.display = 'block';
});

previousButton.addEventListener('click', function(){
    const currentBlock = blocks.find(
        (block) => block.style.display === 'block'
    );
    currentBlock.style.display = 'none';

    const currentIndex = blocks.findIndex(
        (block) => block === currentBlock
    );

    let index = currentIndex - 1;
    if(index < 0) index = blocks.length - 1;
    const prevBlock = blocks[index];
    prevBlock.style.display = 'block';
});