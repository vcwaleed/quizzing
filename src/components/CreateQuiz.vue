<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import { ref } from "vue";
import axios from "axios";

const showquiz = ref(false);
const quizName = ref("");
const questions = ref([]);

const showquiztable = () => {
  showquiz.value = true;
};

const addQuestion = () => {
  questions.value.push({
    question: "",
    options: ["", "", "", ""],
    correctOptionIndex: null,
  });
};

const removeQuestion = (index) => {
  questions.value.splice(index, 1);
};

const sendQuestions = async () => {
  try {
    const response = await axios.post("http://localhost:5000/quiz", {
      quizName: quizName.value,
      questions: questions.value,
    });
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error sending questions:", error);
  }
};
</script>

<template>
  <section class="wrapper">
    <div class="card-container">
      <div class="card">
        <h3>Total Quiz 23</h3>
        <h3>Total student 20</h3>
        <a href="/view">View Detail</a>
      </div>
      <div class="card">
        <h3>Create Quiz</h3>
        <ButtonComponent
          buttonType="secondary"
          buttonSize="medium"
          :action="showquiztable"
          >Create</ButtonComponent
        >
      </div>
    </div>

    <div v-if="showquiz" class="quiz-form">
      <div class="quiz-header">
        <h2>Create New Quiz</h2>
        <input
          v-model="quizName"
          placeholder="Enter Quiz Name"
          class="quiz-name-input"
        />
      </div>

      <div class="questions-container">
        <div
          v-for="(question, index) in questions"
          :key="index"
          class="question-card"
        >
          <div class="question-header">
            <h3>Question {{ index + 1 }}</h3>
            <button @click="removeQuestion(index)" class="remove-btn">×</button>
          </div>

          <input
            v-model="question.question"
            placeholder="Enter your question"
            class="question-input"
          />

          <div class="options-grid">
            <div
              v-for="(option, optIndex) in question.options"
              :key="optIndex"
              class="option-item"
            >
              <input
                v-model="question.options[optIndex]"
                :placeholder="`Option ${optIndex + 1}`"
                class="option-input"
              />
            </div>
          </div>

          <div class="correct-answer-section">
            <label>Correct Answer:</label>
            <select
              v-model.number="question.correctOptionIndex"
              class="correct-answer-select"
            >
              <option v-for="i in 4" :key="i" :value="i - 1">
                Option {{ i }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <ButtonComponent
        buttonType="secondary"
        buttonSize="medium"
        :action="addQuestion"
      >
        Add Question
      </ButtonComponent>
      <ButtonComponent
        buttonType="primary"
        buttonSize="medium"
        :action="sendQuestions"
        class="submit-btn"
      >
        Submit Quiz
      </ButtonComponent>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "../styles/variables" as *;

.quiz-form {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;

  .quiz-header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      color: $primary-color;
      margin-bottom: 1rem;
    }

    .quiz-name-input {
      width: 100%;
      padding: 0.8rem;
      border: 2px solid $primary-color;
      border-radius: 8px;
      font-size: 1.1rem;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: color.adjust($primary-color, $lightness: -10%);
      }
    }
  }

  .questions-container {
    margin-top: -1rem;
  }

  .question-card {
    background: color.adjust($primary-color, $lightness: 40%);
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    position: relative;

    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        color: color.adjust($primary-color, $lightness: -15%);
      }

      .remove-btn {
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: background 0.3s ease;

        &:hover {
          background: color.adjust(#ff4444, $lightness: -10%);
        }
      }
    }

    .question-input {
      width: 100%;
      padding: 0.8rem;
      margin-bottom: 0.4rem;
      border: 2px solid $primary-color;
      border-radius: 8px;
      font-size: 1rem;
    }

    .options-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 1rem;

      .option-item {
        .option-input {
          width: 100%;
          padding: 0.6rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          transition: border-color 0.3s ease;

          &:focus {
            border-color: $primary-color;
            outline: none;
          }
        }
      }
    }

    .correct-answer-section {
      display: flex;
      align-items: center;
      gap: 1rem;

      label {
        font-weight: bold;
        color: color.adjust($primary-color, $lightness: -15%);
      }

      .correct-answer-select {
        padding: 0.5rem;
        border-radius: 6px;
        border: 1px solid $primary-color;
        background: white;
      }
    }
  }

  .submit-btn {
    margin-top: 2rem;
    margin-left: 1rem;
    font-size: 1.1rem;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-family: "Trebuchet MS";
  .card {
    width: 200px;
    background-color: $primary-color;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    font-family: "Trebuchet MS";

    &:hover {
      transform: translateY(-5px) scale(1.05);
    }
  }
}

.card-container {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}
</style>
