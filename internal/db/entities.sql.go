// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: entities.sql

package db

import (
	"context"

	"github.com/google/uuid"
	"github.com/lib/pq"
)

const createEntity = `-- name: CreateEntity :one

INSERT INTO entity_instances (
    entity_type,
    name,
    project_id,
    provider_id,
    originated_from
) VALUES ($1, $2, $3, $4, $5)
RETURNING id, entity_type, name, project_id, provider_id, created_at, originated_from
`

type CreateEntityParams struct {
	EntityType     Entities      `json:"entity_type"`
	Name           string        `json:"name"`
	ProjectID      uuid.UUID     `json:"project_id"`
	ProviderID     uuid.UUID     `json:"provider_id"`
	OriginatedFrom uuid.NullUUID `json:"originated_from"`
}

// CreateEntity adds an entry to the entity_instances table so it can be tracked by Minder.
func (q *Queries) CreateEntity(ctx context.Context, arg CreateEntityParams) (EntityInstance, error) {
	row := q.db.QueryRowContext(ctx, createEntity,
		arg.EntityType,
		arg.Name,
		arg.ProjectID,
		arg.ProviderID,
		arg.OriginatedFrom,
	)
	var i EntityInstance
	err := row.Scan(
		&i.ID,
		&i.EntityType,
		&i.Name,
		&i.ProjectID,
		&i.ProviderID,
		&i.CreatedAt,
		&i.OriginatedFrom,
	)
	return i, err
}

const createEntityWithID = `-- name: CreateEntityWithID :one

INSERT INTO entity_instances (
    id,
    entity_type,
    name,
    project_id,
    provider_id,
    originated_from
) VALUES ($1, $2, $3, $4, $5, $6)
RETURNING id, entity_type, name, project_id, provider_id, created_at, originated_from
`

type CreateEntityWithIDParams struct {
	ID             uuid.UUID     `json:"id"`
	EntityType     Entities      `json:"entity_type"`
	Name           string        `json:"name"`
	ProjectID      uuid.UUID     `json:"project_id"`
	ProviderID     uuid.UUID     `json:"provider_id"`
	OriginatedFrom uuid.NullUUID `json:"originated_from"`
}

// CreateEntityWithID adds an entry to the entities table with a specific ID so it can be tracked by Minder.
func (q *Queries) CreateEntityWithID(ctx context.Context, arg CreateEntityWithIDParams) (EntityInstance, error) {
	row := q.db.QueryRowContext(ctx, createEntityWithID,
		arg.ID,
		arg.EntityType,
		arg.Name,
		arg.ProjectID,
		arg.ProviderID,
		arg.OriginatedFrom,
	)
	var i EntityInstance
	err := row.Scan(
		&i.ID,
		&i.EntityType,
		&i.Name,
		&i.ProjectID,
		&i.ProviderID,
		&i.CreatedAt,
		&i.OriginatedFrom,
	)
	return i, err
}

const createOrEnsureEntityByID = `-- name: CreateOrEnsureEntityByID :one

INSERT INTO entity_instances (
    id,
    entity_type,
    name,
    project_id,
    provider_id,
    originated_from
) VALUES ($1, $2, $3, $4, $5, $6)
ON CONFLICT (id) DO UPDATE
SET
    id = entity_instances.id  -- This is a "noop" update to ensure the RETURNING clause works
RETURNING id, entity_type, name, project_id, provider_id, created_at, originated_from
`

type CreateOrEnsureEntityByIDParams struct {
	ID             uuid.UUID     `json:"id"`
	EntityType     Entities      `json:"entity_type"`
	Name           string        `json:"name"`
	ProjectID      uuid.UUID     `json:"project_id"`
	ProviderID     uuid.UUID     `json:"provider_id"`
	OriginatedFrom uuid.NullUUID `json:"originated_from"`
}

// CreateOrEnsureEntityByID adds an entry to the entity_instances table if it does not exist, or returns the existing entry.
func (q *Queries) CreateOrEnsureEntityByID(ctx context.Context, arg CreateOrEnsureEntityByIDParams) (EntityInstance, error) {
	row := q.db.QueryRowContext(ctx, createOrEnsureEntityByID,
		arg.ID,
		arg.EntityType,
		arg.Name,
		arg.ProjectID,
		arg.ProviderID,
		arg.OriginatedFrom,
	)
	var i EntityInstance
	err := row.Scan(
		&i.ID,
		&i.EntityType,
		&i.Name,
		&i.ProjectID,
		&i.ProviderID,
		&i.CreatedAt,
		&i.OriginatedFrom,
	)
	return i, err
}

const deleteEntity = `-- name: DeleteEntity :exec

DELETE FROM entity_instances
WHERE id = $1 AND project_id = $2
`

type DeleteEntityParams struct {
	ID        uuid.UUID `json:"id"`
	ProjectID uuid.UUID `json:"project_id"`
}

// DeleteEntity removes an entity from the entity_instances table for a project.
func (q *Queries) DeleteEntity(ctx context.Context, arg DeleteEntityParams) error {
	_, err := q.db.ExecContext(ctx, deleteEntity, arg.ID, arg.ProjectID)
	return err
}

const deleteEntityByName = `-- name: DeleteEntityByName :exec

DELETE FROM entity_instances
WHERE name = $2 AND project_id = $1
`

type DeleteEntityByNameParams struct {
	ProjectID uuid.UUID `json:"project_id"`
	Name      string    `json:"name"`
}

// DeleteEntityByName removes an entity from the entity_instances table for a project.
func (q *Queries) DeleteEntityByName(ctx context.Context, arg DeleteEntityByNameParams) error {
	_, err := q.db.ExecContext(ctx, deleteEntityByName, arg.ProjectID, arg.Name)
	return err
}

const getEntitiesByType = `-- name: GetEntitiesByType :many

SELECT id, entity_type, name, project_id, provider_id, created_at, originated_from FROM entity_instances
WHERE entity_instances.entity_type = $1 AND entity_instances.project_id = ANY($2::uuid[])
`

type GetEntitiesByTypeParams struct {
	EntityType Entities    `json:"entity_type"`
	Projects   []uuid.UUID `json:"projects"`
}

// GetEntitiesByType retrieves all entities of a given type for a project or hierarchy of projects.
// this is how one would get all repositories, artifacts, etc.
func (q *Queries) GetEntitiesByType(ctx context.Context, arg GetEntitiesByTypeParams) ([]EntityInstance, error) {
	rows, err := q.db.QueryContext(ctx, getEntitiesByType, arg.EntityType, pq.Array(arg.Projects))
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []EntityInstance{}
	for rows.Next() {
		var i EntityInstance
		if err := rows.Scan(
			&i.ID,
			&i.EntityType,
			&i.Name,
			&i.ProjectID,
			&i.ProviderID,
			&i.CreatedAt,
			&i.OriginatedFrom,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getEntityByID = `-- name: GetEntityByID :one

SELECT id, entity_type, name, project_id, provider_id, created_at, originated_from FROM entity_instances
WHERE entity_instances.id = $1 AND entity_instances.project_id = ANY($2::uuid[])
LIMIT 1
`

type GetEntityByIDParams struct {
	ID       uuid.UUID   `json:"id"`
	Projects []uuid.UUID `json:"projects"`
}

// GetEntityByID retrieves an entity by its ID for a project or hierarchy of projects.
func (q *Queries) GetEntityByID(ctx context.Context, arg GetEntityByIDParams) (EntityInstance, error) {
	row := q.db.QueryRowContext(ctx, getEntityByID, arg.ID, pq.Array(arg.Projects))
	var i EntityInstance
	err := row.Scan(
		&i.ID,
		&i.EntityType,
		&i.Name,
		&i.ProjectID,
		&i.ProviderID,
		&i.CreatedAt,
		&i.OriginatedFrom,
	)
	return i, err
}

const getEntityByName = `-- name: GetEntityByName :one
SELECT id, entity_type, name, project_id, provider_id, created_at, originated_from FROM entity_instances
WHERE entity_instances.name = $2 AND entity_instances.project_id = $1
LIMIT 1
`

type GetEntityByNameParams struct {
	ProjectID uuid.UUID `json:"project_id"`
	Name      string    `json:"name"`
}

// GetEntityByName retrieves an entity by its name for a project or hierarchy of projects.
func (q *Queries) GetEntityByName(ctx context.Context, arg GetEntityByNameParams) (EntityInstance, error) {
	row := q.db.QueryRowContext(ctx, getEntityByName, arg.ProjectID, arg.Name)
	var i EntityInstance
	err := row.Scan(
		&i.ID,
		&i.EntityType,
		&i.Name,
		&i.ProjectID,
		&i.ProviderID,
		&i.CreatedAt,
		&i.OriginatedFrom,
	)
	return i, err
}

const temporaryPopulateArtifacts = `-- name: TemporaryPopulateArtifacts :exec
INSERT INTO entity_instances (id, entity_type, name, project_id, provider_id, created_at, originated_from)
SELECT artifacts.id, 'artifact', LOWER(repositories.repo_owner) || '/' || artifacts.artifact_name, repositories.project_id, repositories.provider_id, artifacts.created_at, artifacts.repository_id FROM artifacts
JOIN repositories ON repositories.id = artifacts.repository_id
WHERE NOT EXISTS (SELECT 1 FROM entity_instances WHERE entity_instances.id = artifacts.id AND entity_instances.entity_type = 'artifact')
`

func (q *Queries) TemporaryPopulateArtifacts(ctx context.Context) error {
	_, err := q.db.ExecContext(ctx, temporaryPopulateArtifacts)
	return err
}

const temporaryPopulatePullRequests = `-- name: TemporaryPopulatePullRequests :exec
INSERT INTO entity_instances (id, entity_type, name, project_id, provider_id, created_at, originated_from)
SELECT pull_requests.id, 'pull_request', repositories.repo_owner || '/' || repositories.repo_name || '/' || pull_requests.pr_number::TEXT, repositories.project_id, repositories.provider_id, pull_requests.created_at, pull_requests.repository_id FROM pull_requests
JOIN repositories ON repositories.id = pull_requests.repository_id
WHERE NOT EXISTS (SELECT 1 FROM entity_instances WHERE entity_instances.id = pull_requests.id AND entity_instances.entity_type = 'pull_request')
`

func (q *Queries) TemporaryPopulatePullRequests(ctx context.Context) error {
	_, err := q.db.ExecContext(ctx, temporaryPopulatePullRequests)
	return err
}

const temporaryPopulateRepositories = `-- name: TemporaryPopulateRepositories :exec
INSERT INTO entity_instances (id, entity_type, name, project_id, provider_id, created_at)
SELECT id, 'repository', repo_owner || '/' || repo_name, project_id, provider_id, created_at FROM repositories
WHERE NOT EXISTS (SELECT 1 FROM entity_instances WHERE entity_instances.id = repositories.id AND entity_instances.entity_type = 'repository')
`

func (q *Queries) TemporaryPopulateRepositories(ctx context.Context) error {
	_, err := q.db.ExecContext(ctx, temporaryPopulateRepositories)
	return err
}
