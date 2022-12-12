import React from "react";
import styles from "./Game.css"
export default function TicTacToe() {
    <div className="{styles.container}">
        <div className="{styles.col}">
            <span onClick={() => playFn(0, 0)} className={styles.cell}>
                {board\[0\][0]}
            </span>
            <span onClick={() => playFn(0, 1)} className={styles.cell}>
                {board\[0\][1]}
            </span>
            <span onClick={() => playFn(0, 2)} className={styles.cell}>
                {board\[0\][2]}
            </span>
        </div>
        <div className={styles.col}>
            <span onClick={() => playFn(1, 0)} className={styles.cell}>
                {board\[1\][0]}
            </span>
            <span onClick={() => playFn(1, 1)} className={styles.cell}>
                {board\[1\][1]}
            </span>
            <span onClick={() => playFn(1, 2)} className={styles.cell}>
                {board\[1\][2]}
            </span>
        </div>
        <div className={styles.col}>
            <span onClick={() => playFn(2, 0)} className={styles.cell}>
                {board\[2\][0]}
            </span>
            <span onClick={() => playFn(2, 1)} className={styles.cell}>
                {board\[2\][1]}
            </span>
            <span onClick={() => playFn(2, 2)} className={styles.cell}>
                {board\[2\][2]}
            </span>
        </div>
    </div>
}