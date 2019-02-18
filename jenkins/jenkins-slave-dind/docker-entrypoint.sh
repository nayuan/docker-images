#!/bin/bash
set -e

# if [ "${1:0:1}" = '-' ]; then
# 	set -- docker "$@"
# fi

# # if our command is a valid Docker subcommand, let's invoke it through Docker instead
# # (this allows for "docker run docker ps", etc)
# if docker "$1" --help > /dev/null 2>&1; then
# 	set -- docker "$@"
# fi

# if we have "--link some-docker:docker" and not DOCKER_HOST, let's set DOCKER_HOST automatically
if [ -z "$DOCKER_HOST" -a "$DOCKER_PORT_2375_TCP" ]; then
	export DOCKER_HOST='tcp://docker:2375'
fi

exec "$@"