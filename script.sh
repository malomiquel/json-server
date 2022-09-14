echo "Lancement du back"
cd C
gcc ./main.c ../include/cJSON.h ../include/cJSON.c functions.c -o main
start main.exe