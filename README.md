# AuraEd Website

This is the source code of [AuraEd Website](https://auraed.org/).

# Contribution

If you're a member of AuraEd technical team or just want to contribute to the source code of AuraEd
Website, you're welcome to do so. We accept contributions from everyone.

## How to contribute?
- Create an issue for the bug/ feature.
- Fork the repo.
- Work on the bug/ feature, and commit & push it.
- Create a pull request to `develop` branch.
- Wait for feedback and for the PR to be approved.

## Contributing guidelines

### Backend: 
- **Formatter**: `Isort`, `Black`
- **Linter**: `Pylint`
- **Commit message**: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Frontend:
...

## Running the server
- Clone the GitHub repo.
- Install `poetry` if not installed.
- Get into the server directory using `cd server`.
- Run `poetry install` for installing dependencies.
- Start a **Postgres** database.
- Copy the `.env.example` and create a `.env` file.
- Fill up the values inside `.env` file as per your database and other config.
- Run `poetry shell` for activating **virtual environment**.
- Run `aerich init-db` for initializing the database
- Execute the `run_migrations.sh` file for running all the pending migrations in your DB.
- Finally, run the application using `uvicorn api:app --reload`.

## Advanced
- **Creating and running migrations**
You'll need to look into *tortoise-orm* and *aerich* for creating and running database migrations.

