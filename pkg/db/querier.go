// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.18.0

package db

import (
	"context"
	"database/sql"
)

type Querier interface {
	AddUserGroup(ctx context.Context, arg AddUserGroupParams) (UserGroup, error)
	AddUserRole(ctx context.Context, arg AddUserRoleParams) (UserRole, error)
	CleanTokenIat(ctx context.Context, id int32) (User, error)
	CreateAccessToken(ctx context.Context, arg CreateAccessTokenParams) (ProviderAccessToken, error)
	CreateGroup(ctx context.Context, arg CreateGroupParams) (Group, error)
	CreateOrganization(ctx context.Context, arg CreateOrganizationParams) (Organization, error)
	CreatePolicy(ctx context.Context, arg CreatePolicyParams) (Policy, error)
	CreateRepository(ctx context.Context, arg CreateRepositoryParams) (Repository, error)
	CreateRole(ctx context.Context, arg CreateRoleParams) (Role, error)
	CreateSessionState(ctx context.Context, arg CreateSessionStateParams) (SessionStore, error)
	CreateUser(ctx context.Context, arg CreateUserParams) (User, error)
	DeleteAccessToken(ctx context.Context, arg DeleteAccessTokenParams) error
	DeleteExpiredSessionStates(ctx context.Context) error
	DeleteGroup(ctx context.Context, id int32) error
	DeleteOrganization(ctx context.Context, id int32) error
	DeletePolicy(ctx context.Context, id int32) error
	DeletePolicyType(ctx context.Context, policyType string) error
	DeleteRepository(ctx context.Context, id int32) error
	DeleteRole(ctx context.Context, id int32) error
	DeleteSessionState(ctx context.Context, id int32) error
	DeleteSessionStateByGroupID(ctx context.Context, arg DeleteSessionStateByGroupIDParams) error
	DeleteUser(ctx context.Context, id int32) error
	GetAccessTokenByGroupID(ctx context.Context, arg GetAccessTokenByGroupIDParams) (ProviderAccessToken, error)
	GetAccessTokenByProvider(ctx context.Context, provider string) ([]ProviderAccessToken, error)
	GetAccessTokenSinceDate(ctx context.Context, arg GetAccessTokenSinceDateParams) (ProviderAccessToken, error)
	GetGroupByID(ctx context.Context, id int32) (Group, error)
	GetGroupByName(ctx context.Context, name string) (Group, error)
	GetGroupIDPortBySessionState(ctx context.Context, sessionState string) (GetGroupIDPortBySessionStateRow, error)
	GetOrganization(ctx context.Context, id int32) (Organization, error)
	GetOrganizationByName(ctx context.Context, name string) (Organization, error)
	GetOrganizationForUpdate(ctx context.Context, name string) (Organization, error)
	GetPoliciesByRepoAndType(ctx context.Context, arg GetPoliciesByRepoAndTypeParams) ([]GetPoliciesByRepoAndTypeRow, error)
	GetPolicyByID(ctx context.Context, id int32) (GetPolicyByIDRow, error)
	GetPolicyType(ctx context.Context, arg GetPolicyTypeParams) (PolicyType, error)
	GetPolicyTypeById(ctx context.Context, id int32) (GetPolicyTypeByIdRow, error)
	GetPolicyTypes(ctx context.Context, provider string) ([]PolicyType, error)
	GetRepositoryByID(ctx context.Context, id int32) (Repository, error)
	GetRepositoryByIDAndGroup(ctx context.Context, arg GetRepositoryByIDAndGroupParams) (Repository, error)
	GetRepositoryByRepoID(ctx context.Context, arg GetRepositoryByRepoIDParams) (Repository, error)
	GetRepositoryByRepoName(ctx context.Context, arg GetRepositoryByRepoNameParams) (Repository, error)
	GetRoleByID(ctx context.Context, id int32) (Role, error)
	GetRoleByName(ctx context.Context, arg GetRoleByNameParams) (Role, error)
	GetSessionState(ctx context.Context, id int32) (SessionStore, error)
	GetSessionStateByGroupID(ctx context.Context, grpID sql.NullInt32) (SessionStore, error)
	GetUserByEmail(ctx context.Context, email sql.NullString) (User, error)
	GetUserByID(ctx context.Context, id int32) (User, error)
	GetUserByUserName(ctx context.Context, username string) (User, error)
	GetUserGroups(ctx context.Context, userID int32) ([]GetUserGroupsRow, error)
	GetUserRoles(ctx context.Context, userID int32) ([]GetUserRolesRow, error)
	ListAllRepositories(ctx context.Context, provider string) ([]Repository, error)
	ListGroups(ctx context.Context, arg ListGroupsParams) ([]Group, error)
	ListGroupsByOrganizationID(ctx context.Context, organizationID int32) ([]Group, error)
	ListOrganizations(ctx context.Context, arg ListOrganizationsParams) ([]Organization, error)
	ListPoliciesByGroupID(ctx context.Context, arg ListPoliciesByGroupIDParams) ([]ListPoliciesByGroupIDRow, error)
	ListRepositoriesByGroupID(ctx context.Context, arg ListRepositoriesByGroupIDParams) ([]Repository, error)
	ListRepositoriesByOwner(ctx context.Context, arg ListRepositoriesByOwnerParams) ([]Repository, error)
	ListRoles(ctx context.Context, arg ListRolesParams) ([]Role, error)
	ListRolesByGroupID(ctx context.Context, arg ListRolesByGroupIDParams) ([]Role, error)
	ListUsers(ctx context.Context, arg ListUsersParams) ([]User, error)
	ListUsersByGroup(ctx context.Context, arg ListUsersByGroupParams) ([]User, error)
	ListUsersByOrganization(ctx context.Context, arg ListUsersByOrganizationParams) ([]User, error)
	ListUsersByRoleId(ctx context.Context, roleID int32) ([]int32, error)
	RevokeUserToken(ctx context.Context, arg RevokeUserTokenParams) (User, error)
	RevokeUsersTokens(ctx context.Context, minTokenIssuedTime sql.NullTime) (User, error)
	UpdateAccessToken(ctx context.Context, arg UpdateAccessTokenParams) (ProviderAccessToken, error)
	UpdateGroup(ctx context.Context, arg UpdateGroupParams) (Group, error)
	UpdateOrganization(ctx context.Context, arg UpdateOrganizationParams) (Organization, error)
	UpdatePassword(ctx context.Context, arg UpdatePasswordParams) (User, error)
	UpdateRepository(ctx context.Context, arg UpdateRepositoryParams) (Repository, error)
	UpdateRepositoryByID(ctx context.Context, arg UpdateRepositoryByIDParams) (Repository, error)
	UpdateRole(ctx context.Context, arg UpdateRoleParams) (Role, error)
	UpdateUser(ctx context.Context, arg UpdateUserParams) (User, error)
}

var _ Querier = (*Queries)(nil)
