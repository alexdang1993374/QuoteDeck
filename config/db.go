package config

import (
	"log"
	"os"

	"example.com/m/v2/controllers"
	"github.com/go-pg/pg/v9"
)

// Connecting to db
func Connect() *pg.DB {
	opts := &pg.Options{
		User:     "postgres",
		Password: "CC1993374",
		Addr:     "localhost:5432",
		Database: "soundboard",
	}
	var db *pg.DB = pg.Connect(opts)
	if db == nil {
		log.Printf("Failed to connect")
		os.Exit(100)
	}
	log.Printf("Connected to db")
	controllers.CreateTodoTable(db)
	controllers.CreateSimpsonsTable(db)
	controllers.CreateSunnyTable(db)
	controllers.InitiateDB(db)
	return db
}
