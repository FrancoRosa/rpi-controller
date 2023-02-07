from os import uname, chdir
is_rpi = uname()[4] != 'x86_64'
