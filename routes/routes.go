package routes

import (
	"net/http"

	"example.com/m/v2/controllers"
	"github.com/gin-gonic/gin"
)

func Routes(router *gin.Engine) {
	router.GET("/api", welcome)
	router.GET("/api/spongequotes", controllers.GetAllTodos)
	router.POST("/api/spongequotes", controllers.CreateTodo)
	router.GET("/api/spongequotes/:quoteId", controllers.GetSingleTodo)
	router.PUT("/api/spongequotes/:quoteId", controllers.EditTodo)
	router.DELETE("/api/spongequotes/:quoteId", controllers.DeleteTodo)

	router.GET("/api/simpsonsquotes", controllers.GetAllSimpsons)
	router.POST("/api/simpsonsquotes", controllers.CreateSimpson)
	router.GET("/api/simpsonsquotes/:quoteId", controllers.GetSingleSimpson)
	router.PUT("/api/simpsonsquotes/:quoteId", controllers.EditSimpson)
	router.DELETE("/api/simpsonsquotes/:quoteId", controllers.DeleteSimpson)

	router.GET("/api/sunnyquotes", controllers.GetAllSunny)
	router.POST("/api/sunnyquotes", controllers.CreateSunny)
	router.GET("/api/sunnyquotes/:quoteId", controllers.GetSingleSunny)
	router.PUT("/api/sunnyquotes/:quoteId", controllers.EditSunny)
	router.DELETE("/api/sunnyquotes/:quoteId", controllers.DeleteSunny)

}
func welcome(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status":  200,
		"message": "Welcome To API",
	})
	return
}
