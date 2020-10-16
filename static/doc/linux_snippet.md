# Linux snippet

## Command

### 1.count files

```shell
ls |wc -w
```

### 2.count files size

```shell
du filename
```

## Network config

### 1.Fixing Net-Manager

```shell
sudo /etc/init.d/network-manager stop && 
sudo rm -rf /var/lib/NetworkManager/NetworkManager.state && 
sudo sed -i 's/managed=false/managed=true/g' /etc/NetworkManager/NetworkManager.conf && 
sudo /etc/init.d/network-manager start
```

## Editor

### 1.sublime-text

```shell
wget https://download.sublimetext.com/sublime_text_3_build_3211_x64.tar.bz2 -O /opt/sublime_text_3_build_3211_x64.tar.bz2 && 
tar -xf /opt/sublime_text_3_build_3211_x64.tar.bz2 -C /opt/ && 
rm -f /opt/sublime_text_3_build_3211_x64.tar.bz2 && 
ln -s /opt/sublime_text_3/sublime_text /bin/subl
```

### 2.Pycharm

```shell
sudo wget https://download.jetbrains.8686c.com/python/pycharm-community-2020.2.3.tar.gz &
sudo tar -zxvf pycharm-community-2020.2.3.tar.gz -C /opt/ &
sudo rm pycharm-community-2020.2.3.tar.gz &
sudo /opt/pycharm-community-2020.2.3/bin/pycharm.sh
```

## Server

### 1.Python http.server
```shell
python3 -m http.server
```
### 2.SSH server
```shell
sudo apt install openssh-server
```

### 3.FTP server plaintext

```shell
sudo apt-get install vsftpd &&
sudo cp /etc/vsftpd.conf /etc/vsftpd.conf.bak &&
sudo sed -i 's/listen=NO/listen=YES/g' /etc/vsftpd.conf &&
sudo sed -i 's/listen_ipv6=YES/listen_ipv6=NO/g' /etc/vsftpd.conf &&
sudo sed -i 's/#write_enable=YES/write_enable=YES/g' /etc/vsftpd.conf &&
sudo sed -i 's/#chroot_local_user=YES/chroot_local_user=NO/g' /etc/vsftpd.conf &&
sudo sed -i 's/#chroot_list_enable=YES/chroot_list_enable=YES/g' /etc/vsftpd.conf &&
sudo sed -i 's/#chroot_list_file=\/etc\/vsftpd.chroot_list/chroot_list_file=\/etc\/vsftpd.chroot_list/g' /etc/vsftpd.conf &&
sudo sed -i 's/listen_ipv6=YES/listen_ipv6=NO/g' /etc/vsftpd.conf &&
sudo sed -i '$a local_root=/home/ftpuser' /etc/vsftpd.conf &&
sudo sed -i '$a allow_writeable_chroot=YES' /etc/vsftpd.conf &&
sudo mkdir /home/ftpuser &&
sudo useradd ftpuser -d /home/ftpuser -s /bin/bash &&
sudo passwd ftpuser &&
sudo chown -R ftpuser:ftpuser /home/ftpuser/ &&
sudo echo ftpuser>>/etc/vsftpd.chroot_list &&
sudo service vsftpd restart
```

## File

### 1.make iso
```shell
# mkisofs
mkisofs -r -o a.iso a/

# genisoimage
genisoimage -o a.iso -V BACKUP -R -J a/
```

### 2.mount iso

```shell
mkdir /mnt/cdrom/ 
mount -t iso9660 -o loop /dev/cdrom /mnt/cdrom/
umount /dev/loop15

# or
mkdir dvd/
mount -o loop a.iso dvd/
umount dvd/

df -hl
```

### 3.pdf reader

```shell
wget http://cdn07.foxitsoftware.cn/pub/foxit/reader/desktop/linux/2.x/2.1/en_us/FoxitReader2.1.0805_Server_x64_enu_Setup.run.tar.gz
tar -zxvf FoxitReader2.1.0805_Server_x64_enu_Setup.run.tar.gz
./FoxitReader2.1.0805_Server_x64_enu_Setup.run
```

