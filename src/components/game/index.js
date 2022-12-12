import React from "react";
import styles from "./Game.css"

import Head from "next/head"

import TicTacToe from "../game/TicTacToe"





export default function Game() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tic Tac Toe game</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Indie+Flower');
                </style>
            </Head>

            <main className={styles.main}>
                <TicTacToe />
            </main>
        </div>
    );
}