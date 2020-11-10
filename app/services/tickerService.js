import io from 'socket.io-client';
import { recieveDataAction } from '../actions/action';
import { store } from '../store/configureStore.dev';
let socket = null;

export const connect = (stockSymbol) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            store.dispatch(recieveDataAction(data));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
