import React from "react";
import AppTemplate from "../UI/appTemplate";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function AllCards() {
   return (
      <AppTemplate>
         <div className="row mb-3">
            <div className="col-8">
               <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Search for a word"
                  aria-label="Search"
                  id="searchId"
               />
            </div>
            <div className="col-4">
               <button
                  className="btn btn-secondary btn-sm btn-block"
                  id="searchBtn"
               >
                  Search
               </button>
            </div>
         </div>
         <div className="row">
            <div className="col-6">
               <p>Sort cards by</p>
            </div>

            <div className="col-6">
               <select className="custom-select mb-5 border">
                  <option defaultValue>Most recent</option>
                  <option value="1">Oldest</option>
                  <option value="2">Hardest</option>
                  <option value="3">Easiest</option>
               </select>
            </div>
         </div>
         <div className="row">
            <div className="card bg-primary col-9 offset-1">
               <div className="card-body secondCard">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
                  jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs
                  jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
                  wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft
                  Jim. Sex-charged fop blew my junk TV quiz. How quickly daft
                  jumping zebras vex. Two driven jocks help fax my big quiz.
                  Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!"
                  my brave ghost pled. Five quacking zephyrs jolt my wax bed.
                  Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves
                  quart jug of bad milk. A very bad quack might jinx zippy
                  fowls. Few quips galvanized the mock jury box. Quick brown
                  dogs jump over the lazy fox. The jay, pig, fox, zebra, and my
                  wolves quack! Blowzy red vixens fight for a quick jump.
                  Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is
                  to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's
                  fun TV quiz game. Woven silk pyjamas exchanged for blue
                  quartz. Brawny gods just
               </div>
            </div>
            <Link to="/edit" className="btn btn-link col-2">
               <img src={editIcon} width="20px" alt="" />
               Edit
            </Link>

            <div className="card bg-secondary col-9 offset-1 mb-5">
               <div className="card-body secondCard">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
                  jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs
                  jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
                  wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft
                  Jim. Sex-charged fop blew my junk TV quiz. How quickly daft
                  jumping zebras vex. Two driven jocks help fax my big quiz.
                  Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!"
                  my brave ghost pled. Five quacking zephyrs jolt my wax bed.
                  Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves
                  quart jug of bad milk. A very bad quack might jinx zippy
                  fowls. Few quips galvanized the mock jury box. Quick brown
                  dogs jump over the lazy fox. The jay, pig, fox, zebra, and my
                  wolves quack! Blowzy red vixens fight for a quick jump.
                  Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is
                  to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's
                  fun TV quiz game. Woven silk pyjamas exchanged for blue
                  quartz. Brawny gods just
               </div>
            </div>
         </div>
         <div className="row">
            <div className="card bg-primary col-9 offset-1">
               <div className="card-body secondCard">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
                  jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs
                  jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
                  wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft
                  Jim. Sex-charged fop blew my junk TV quiz. How quickly daft
                  jumping zebras vex. Two driven jocks help fax my big quiz.
                  Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!"
                  my brave ghost pled. Five quacking zephyrs jolt my wax bed.
                  Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves
                  quart jug of bad milk. A very bad quack might jinx zippy
                  fowls. Few quips galvanized the mock jury box. Quick brown
                  dogs jump over the lazy fox. The jay, pig, fox, zebra, and my
                  wolves quack! Blowzy red vixens fight for a quick jump.
                  Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is
                  to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's
                  fun TV quiz game. Woven silk pyjamas exchanged for blue
                  quartz. Brawny gods just
               </div>
            </div>
            <Link to="/edit" className="btn btn-link col-2">
               <img src={editIcon} width="20px" alt="" />
               Edit
            </Link>

            <div className="card bg-secondary col-9 offset-1 mb-5">
               <div className="card-body secondCard">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
                  jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs
                  jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick
                  wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft
                  Jim. Sex-charged fop blew my junk TV quiz. How quickly daft
                  jumping zebras vex. Two driven jocks help fax my big quiz.
                  Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!"
                  my brave ghost pled. Five quacking zephyrs jolt my wax bed.
                  Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves
                  quart jug of bad milk. A very bad quack might jinx zippy
                  fowls. Few quips galvanized the mock jury box. Quick brown
                  dogs jump over the lazy fox. The jay, pig, fox, zebra, and my
                  wolves quack! Blowzy red vixens fight for a quick jump.
                  Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is
                  to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's
                  fun TV quiz game. Woven silk pyjamas exchanged for blue
                  quartz. Brawny gods just
               </div>
            </div>
         </div>
      </AppTemplate>
   );
}
