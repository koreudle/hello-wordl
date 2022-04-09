import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>{gameName}</i> est un jeu basé sur{" "}
        <a href="https://github.com/lynn/hello-wordl">
          <i>hello wordl</i>
        </a>{" "}
        adapté à l'univers du site koreus.com.
      </p>
      <p>
        Vous avez {maxGuesses} essais pour deviner un mot lié à l'univers de Koreus.com.
        <br />
        Après chaque essai, vous obtenez une réponse de type 'Mastermind'.
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Absent, letter: "w" },
          { clue: Clue.Absent, letter: "o" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Elsewhere, letter: "d" },
        ]}
      />
      <p>
        <b>W</b> et <b>O</b> ne figurent pas dans le mot recherché.
      </p>
      <p>
        <b className={"green-bg"}>R</b> est correct ! La troisième lettre est{" "}
        <b className={"green-bg"}>R</b>
        .<br />
        <strong>(Il peut cependant y avoir un autre R dans le mot.)</strong>
      </p>
      <p>
        <b className={"yellow-bg"}>D</b> apparaît <em>ailleurs</em> dans le mot recherché.
        <br />
        <strong>(Peut-être plus d'une fois. 🤔)</strong>
      </p>
      <hr />
      <p>
        Déplaçons le <b>D</b> dans notre proposition suivante :
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "d" },
          { clue: Clue.Correct, letter: "a" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Absent, letter: "k" },
        ]}
        annotation={"Pas loin !"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "d" },
          { clue: Clue.Correct, letter: "a" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Correct, letter: "t" },
        ]}
        annotation={"Trouvé !"}
      />
    </div>
  );
}
