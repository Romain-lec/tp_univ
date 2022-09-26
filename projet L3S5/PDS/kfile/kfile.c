#define BUFFER_SIZE 1024

#include<stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

typedef struct {
    char buffer [BUFFER_SIZE]; // list of char wait to be add to file
    int offset; // indice position
    int fileDescriptor; // id of open file
}kfile;

int kPutC(int character, kfile* stream){
    stream->buffer[stream->offset]=character;
    stream->offset++;

    if(stream->offset >= BUFFER_SIZE){
        int ok = kflush(stream);
        if(!ok) return EOF;
    }
    return character;
}

int kflush(kfile* stream){
    if(stream->offset == 0) return 0;

    int written = write(stream->fileDescriptor,stream->buffer,stream->offset);
    if(written != stream->offset) return 1;
    stream->offset = 0;
    return 0;
}

kfile* kopen( const char* pathname){
    kfile * stream = malloc(sizeof(kfile));
    int fileDesc = open(pathname,O_APPEND); //on doit changer append pour les modification de fichier
    if(fileDesc < 0) return EOF; // a changer
    stream->offset = 0;
    stream->fileDescriptor = fileDesc;
    return stream;
}

int kclose(kfile* stream){
    kflush(stream);
    free(stream->buffer);
    free(stream->offset);
    int ok = close(stream->fileDescriptor);
    free(stream->fileDescriptor);
    if(!ok) return 1;
    return 0;
}
