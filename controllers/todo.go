package controllers

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/go-pg/pg/v9"
	"github.com/go-pg/pg/v9/orm"
	guuid "github.com/google/uuid"
)

type Todo struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Body      string    `json:"body"`
	Completed int       `json:"completed"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type Simpsons struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Body      string    `json:"body"`
	Completed int       `json:"completed"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type Sunny struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Body      string    `json:"body"`
	Completed int       `json:"completed"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// Create User Table
func CreateTodoTable(db *pg.DB) error {
	opts := &orm.CreateTableOptions{
		IfNotExists: true,
	}
	createError := db.CreateTable(&Todo{}, opts)
	if createError != nil {
		log.Printf("Error while creating todo table, Reason: %v\n", createError)
		return createError
	}
	log.Printf("Todo table created")
	return nil
}

func CreateSimpsonsTable(db *pg.DB) error {
	opts := &orm.CreateTableOptions{
		IfNotExists: true,
	}
	createError := db.CreateTable(&Simpsons{}, opts)
	if createError != nil {
		log.Printf("Error while creating Simpsons table, Reason: %v\n", createError)
		return createError
	}
	log.Printf("Simpsons table created")
	return nil
}

func CreateSunnyTable(db *pg.DB) error {
	opts := &orm.CreateTableOptions{
		IfNotExists: true,
	}
	createError := db.CreateTable(&Sunny{}, opts)
	if createError != nil {
		log.Printf("Error while creating Sunny table, Reason: %v\n", createError)
		return createError
	}
	log.Printf("Sunny table created")
	return nil
}

func GetAllTodos(c *gin.Context) {
	var todos []Todo
	err := dbConnect.Model(&todos).Select()
	if err != nil {
		log.Printf("Error while getting all todos, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "All Todos",
		"data":    todos,
	})
	return
}

func CreateTodo(c *gin.Context) {
	var todo Todo
	c.BindJSON(&todo)
	title := todo.Title
	body := todo.Body
	completed := todo.Completed
	id := guuid.New().String()
	insertError := dbConnect.Insert(&Todo{
		ID:        id,
		Title:     title,
		Body:      body,
		Completed: completed,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	})
	if insertError != nil {
		log.Printf("Error while inserting new todo into db, Reason: %v\n", insertError)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusCreated, gin.H{
		"status":  http.StatusCreated,
		"message": "Todo created Successfully",
	})
	return
}
func GetSingleTodo(c *gin.Context) {
	todoId := c.Param("quoteId")
	fmt.Println(todoId)
	todo := &Todo{ID: todoId}
	fmt.Println(todo)
	err := dbConnect.Select(todo)
	if err != nil {
		log.Printf("Error while getting a single todo, Reason: %v\n", err)
		c.JSON(http.StatusNotFound, gin.H{
			"status":  http.StatusNotFound,
			"message": "Todo not found",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Single Todo",
		"data":    todo,
	})
	return
}
func EditTodo(c *gin.Context) {
	todoId := c.Param("quoteId")
	var todo Todo
	c.BindJSON(&todo)
	completed := todo.Completed
	_, err := dbConnect.Model(&Todo{}).Set("completed = ?", completed).Where("id = ?", todoId).Update()
	if err != nil {
		log.Printf("Error, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  500,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  200,
		"message": "Todo Edited Successfully",
	})
	return
}
func DeleteTodo(c *gin.Context) {
	todoId := c.Param("quoteId")
	todo := &Todo{ID: todoId}
	err := dbConnect.Delete(todo)
	if err != nil {
		log.Printf("Error while deleting a single todo, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Todo deleted successfully",
	})
	return
}

func GetAllSimpsons(c *gin.Context) {
	var todos []Simpsons
	err := dbConnect.Model(&todos).Select()
	if err != nil {
		log.Printf("Error while getting all Simpsons, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "All Simpsons",
		"data":    todos,
	})
	return
}

func CreateSimpson(c *gin.Context) {
	var todo Simpsons
	c.BindJSON(&todo)
	title := todo.Title
	body := todo.Body
	completed := todo.Completed
	id := guuid.New().String()
	insertError := dbConnect.Insert(&Simpsons{
		ID:        id,
		Title:     title,
		Body:      body,
		Completed: completed,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	})
	if insertError != nil {
		log.Printf("Error while inserting new Simpsons into db, Reason: %v\n", insertError)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusCreated, gin.H{
		"status":  http.StatusCreated,
		"message": "Simpsons created Successfully",
	})
	return
}
func GetSingleSimpson(c *gin.Context) {
	todoId := c.Param("quoteId")
	fmt.Println(todoId)
	todo := &Simpsons{ID: todoId}
	fmt.Println(todo)
	err := dbConnect.Select(todo)
	if err != nil {
		log.Printf("Error while getting a single Simpsons, Reason: %v\n", err)
		c.JSON(http.StatusNotFound, gin.H{
			"status":  http.StatusNotFound,
			"message": "Simpsons not found",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Single Simpson",
		"data":    todo,
	})
	return
}
func EditSimpson(c *gin.Context) {
	todoId := c.Param("quoteId")
	var todo Simpsons
	c.BindJSON(&todo)
	completed := todo.Completed
	_, err := dbConnect.Model(&Simpsons{}).Set("completed = ?", completed).Where("id = ?", todoId).Update()
	if err != nil {
		log.Printf("Error, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  500,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  200,
		"message": "Simpsons Edited Successfully",
	})
	return
}
func DeleteSimpson(c *gin.Context) {
	todoId := c.Param("quoteId")
	todo := &Simpsons{ID: todoId}
	err := dbConnect.Delete(todo)
	if err != nil {
		log.Printf("Error while deleting a single Simpsons, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Simpsons deleted successfully",
	})
	return
}

func GetAllSunny(c *gin.Context) {
	var todos []Sunny
	err := dbConnect.Model(&todos).Select()
	if err != nil {
		log.Printf("Error while getting all Sunny, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "All Sunny",
		"data":    todos,
	})
	return
}

func CreateSunny(c *gin.Context) {
	var todo Sunny
	c.BindJSON(&todo)
	title := todo.Title
	body := todo.Body
	completed := todo.Completed
	id := guuid.New().String()
	insertError := dbConnect.Insert(&Sunny{
		ID:        id,
		Title:     title,
		Body:      body,
		Completed: completed,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	})
	if insertError != nil {
		log.Printf("Error while inserting new Sunny into db, Reason: %v\n", insertError)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusCreated, gin.H{
		"status":  http.StatusCreated,
		"message": "Sunny created Successfully",
	})
	return
}
func GetSingleSunny(c *gin.Context) {
	todoId := c.Param("quoteId")
	fmt.Println(todoId)
	todo := &Sunny{ID: todoId}
	fmt.Println(todo)
	err := dbConnect.Select(todo)
	if err != nil {
		log.Printf("Error while getting a single Sunny, Reason: %v\n", err)
		c.JSON(http.StatusNotFound, gin.H{
			"status":  http.StatusNotFound,
			"message": "Sunny not found",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Single Sunny",
		"data":    todo,
	})
	return
}
func EditSunny(c *gin.Context) {
	todoId := c.Param("quoteId")
	var todo Sunny
	c.BindJSON(&todo)
	completed := todo.Completed
	_, err := dbConnect.Model(&Sunny{}).Set("completed = ?", completed).Where("id = ?", todoId).Update()
	if err != nil {
		log.Printf("Error, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  500,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  200,
		"message": "Sunny Edited Successfully",
	})
	return
}
func DeleteSunny(c *gin.Context) {
	todoId := c.Param("quoteId")
	todo := &Sunny{ID: todoId}
	err := dbConnect.Delete(todo)
	if err != nil {
		log.Printf("Error while deleting a single Sunny, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Sunny deleted successfully",
	})
	return
}

var dbConnect *pg.DB

func InitiateDB(db *pg.DB) {
	dbConnect = db
}
