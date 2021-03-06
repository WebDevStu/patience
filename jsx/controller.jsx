/**
 * plan
 *
 * DeckOfCards class creates and shuffles the cards
 * Board class manages all board events
 * Game class manages the state of the game and cards
 * View class renders the game
 */

(() => {

    const
        deck  = new DeckOfCards(),
        board = new Board(),
        game  = new Game(deck, board),
        view  = new View(game);

    _.listenTo({
        'release:card':     view.render
    }, view)
    .listenTo({
        'set:dragging':     board.setDragging,
        'move:card':        board.moveCards,
        'drop:card':        board.dropCard,
        'release:card':     board.releaseDragging,
        'update:matrix':    board.updateMatrix
    }, board)
    .listenTo({
        'drop:card':        game.checkChannel
    }, game);

    // render last thing
    view.render();
}) ();
