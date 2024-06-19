import React, { useState } from 'react'
import { StyleSheet, Text, View,  } from 'react-native';

import { Button } from './Components'

import Movie from './Movie'

export default function App() {

  var movieList = []

  const [currentScore, setCurrentScore] = useState(0) 

  const movie1 = new Movie("The Shawshank Redemption", 93)
  const movie2 = new Movie("The Godfather", 92)
  const movie3 = new Movie("The Dark Knight", 90)
  const movie4 = new Movie("Pulp Fiction", 89)
  const movie5 = new Movie("The Lord Of The Rings: The Two Towers", 88)
  const movie6 = new Movie("Star Wars: Episode V - The Empire Strikes Back", 87)
  const movie7 = new Movie("It's a Wonderful Life", 86)
  const movie8 = new Movie("Parasite", 85)
  const movie9 = new Movie("Apocalypse Now", 84)
  const movie10 = new Movie("Toy Story", 83)

  movieList.push(movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10)

  const randomMovieA = movieList[Math.floor(Math.random() * movieList.length)];
  const randomMovieB = movieList[Math.floor(Math.random() * movieList.length)];

  function movieA(){
    if(randomMovieA.rating >= randomMovieB.rating) {
      console.log('correct! movie is lower');
      setCurrentScore(currentScore + 1)
    } else {
      console.log('wrong!');
      setCurrentScore(0)
    }
  }

  function movieB() {
    if(randomMovieB.rating >= randomMovieA.rating) {
      setCurrentScore(currentScore + 1)
      console.log('correct! movie is lower');
    } else {
      console.log('wrong!');
      setCurrentScore(0)
    }
  }

  console.log('randomMovieA is: ' + JSON.stringify(randomMovieA, null, 2));
  console.log('randomMovieB is: ' + JSON.stringify(randomMovieB, null, 2));

  console.log('currentScore is: ' + currentScore);
  
  return (
    <View style={currentScore === 0 ? styles.noScoreStyle : styles.container}>
      {currentScore !== undefined &&
        <Text style={styles.score}>Current Score: {currentScore}</Text>
      }

      <View style={currentScore === 0 ? styles.noScoreGameContainerStyle : styles.gameContainer}>
        <Text style={styles.title}>Higher or Lower</Text>
        <View style={{height: 12}} />

        <Text style={styles.question}>Which movie has the higher iMDB Rating?</Text>

        <View style={{height: 24}} />

        <View style={styles.buttonContainer}>
          <Button title={randomMovieA.title} onPress={() => movieA()} style={styles.button} buttonTextStyle={styles.buttonText}/>
          <Button title={randomMovieB.title} onPress={() => movieB()} style={styles.button} buttonTextStyle={styles.buttonText}/>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#609E61',
  },
  noScoreStyle: {
    flex: 1,
    backgroundColor: '#F25858',
  },
  gameContainer: {
    flex: 1,
    backgroundColor: '#609E61',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noScoreGameContainerStyle: {
    flex: 1,
    backgroundColor: '#F25858',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'teal',
    width: 100,
    height: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    textAlign: 'center'
  },
  score: {
    alignSelf: 'flex-end',
    padding: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  question: {
  }
});
