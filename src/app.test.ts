import { mount, flushPromises } from '@vue/test-utils'
import App from './App.vue'
import '@/mocks/io'
import { $api } from '@/apis/index'

const mockRepo ={
  "id": 32011321,
  "node_id": "MDEwOlJlcG9zaXRvcnkzMjAxMTMyMQ==",
  "name": "advance_practice",
  "full_name": "franklion/advance_practice",
  "private": false,
  "owner": {
    "login": "franklion",
    "id": 10952687,
    "node_id": "MDQ6VXNlcjEwOTUyNjg3",
    "avatar_url": "https://avatars.githubusercontent.com/u/10952687?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/franklion",
    "html_url": "https://github.com/franklion",
    "followers_url": "https://api.github.com/users/franklion/followers",
    "following_url": "https://api.github.com/users/franklion/following{/other_user}",
    "gists_url": "https://api.github.com/users/franklion/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/franklion/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/franklion/subscriptions",
    "organizations_url": "https://api.github.com/users/franklion/orgs",
    "repos_url": "https://api.github.com/users/franklion/repos",
    "events_url": "https://api.github.com/users/franklion/events{/privacy}",
    "received_events_url": "https://api.github.com/users/franklion/received_events",
    "type": "User",
    "site_admin": false
  },
  "html_url": "https://github.com/franklion/advance_practice",
  "description": "合併之前html5 css3 project ",
  "fork": false,
  "url": "https://api.github.com/repos/franklion/advance_practice",
  "forks_url": "https://api.github.com/repos/franklion/advance_practice/forks",
  "keys_url": "https://api.github.com/repos/franklion/advance_practice/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/franklion/advance_practice/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/franklion/advance_practice/teams",
  "hooks_url": "https://api.github.com/repos/franklion/advance_practice/hooks",
  "issue_events_url": "https://api.github.com/repos/franklion/advance_practice/issues/events{/number}",
  "events_url": "https://api.github.com/repos/franklion/advance_practice/events",
  "assignees_url": "https://api.github.com/repos/franklion/advance_practice/assignees{/user}",
  "branches_url": "https://api.github.com/repos/franklion/advance_practice/branches{/branch}",
  "tags_url": "https://api.github.com/repos/franklion/advance_practice/tags",
  "blobs_url": "https://api.github.com/repos/franklion/advance_practice/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/franklion/advance_practice/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/franklion/advance_practice/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/franklion/advance_practice/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/franklion/advance_practice/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/franklion/advance_practice/languages",
  "stargazers_url": "https://api.github.com/repos/franklion/advance_practice/stargazers",
  "contributors_url": "https://api.github.com/repos/franklion/advance_practice/contributors",
  "subscribers_url": "https://api.github.com/repos/franklion/advance_practice/subscribers",
  "subscription_url": "https://api.github.com/repos/franklion/advance_practice/subscription",
  "commits_url": "https://api.github.com/repos/franklion/advance_practice/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/franklion/advance_practice/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/franklion/advance_practice/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/franklion/advance_practice/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/franklion/advance_practice/contents/{+path}",
  "compare_url": "https://api.github.com/repos/franklion/advance_practice/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/franklion/advance_practice/merges",
  "archive_url": "https://api.github.com/repos/franklion/advance_practice/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/franklion/advance_practice/downloads",
  "issues_url": "https://api.github.com/repos/franklion/advance_practice/issues{/number}",
  "pulls_url": "https://api.github.com/repos/franklion/advance_practice/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/franklion/advance_practice/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/franklion/advance_practice/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/franklion/advance_practice/labels{/name}",
  "releases_url": "https://api.github.com/repos/franklion/advance_practice/releases{/id}",
  "deployments_url": "https://api.github.com/repos/franklion/advance_practice/deployments",
  "created_at": "2015-03-11T10:19:48Z",
  "updated_at": "2015-03-13T07:31:22Z",
  "pushed_at": "2015-03-13T07:44:01Z",
  "git_url": "git://github.com/franklion/advance_practice.git",
  "ssh_url": "git@github.com:franklion/advance_practice.git",
  "clone_url": "https://github.com/franklion/advance_practice.git",
  "svn_url": "https://github.com/franklion/advance_practice",
  "homepage": null,
  "size": 760,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": "CSS",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": true,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 0,
  "license": null,
  "allow_forking": true,
  "is_template": false,
  "topics": [],
  "visibility": "public",
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": "master"
}
jest.spyOn($api, 'repos').mockResolvedValue(Array(6).fill(mockRepo))

describe('App.vue', () => {
  const wrapper = mount(App)

  test('calls api when mounted, with username franklion, page 1, then gets 6 repos', async () => {
    expect($api.repos).toHaveBeenCalledTimes(1)
    expect($api.repos).toHaveBeenCalledWith('franklion', {
      page: 1
    })

    await flushPromises()
    const posts = wrapper.findAll('[data-test="repo-item"]')
    expect(posts).toHaveLength(6)
  })

  // JSDom doesn't implement intersection observer, so for now it's meaningless to mock it to test scroll event.
})
