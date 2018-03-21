FROM node

ENV HOME=/usr/local/src

COPY docker/frontend/run.sh $HOME

WORKDIR $HOME
EXPOSE 8080

CMD ["./run.sh"]
