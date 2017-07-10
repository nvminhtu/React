# PROJECT 01

## Ứng dụng load dữ liệu bài học tiếng Anh từ 1 trang Wordpress (dùng Wordpress làm API JSON)

## WORDPRESS

* Cài đặt Wordpress
* Tạo cutom post type (Cài plugin `Custom Post Type UI`) để tạo và đặt tên là `movies`
* Tạo custom field cho cho custom post type vừa tạo. (cài plugin `Advanced Custom Fields`)
* Tạo Wordpress JSON API (cài plugin `WP REST API` - version 2)

* `Lưu ý` khi cài nhớ chọn Custom Post Type vừa chọn: Show in Rest => là True
* `Lưu ý` nếu Custom Field nó ko trả về JSON thì phải thêm code như sau vào file function.php
```
function wp_api_encode_acf($data,$post,$context){
	$data['meta'] = array_merge($data['meta'],get_fields($post['ID']));
	return $data;
}

if( function_exists('get_fields') ){
	add_filter('json_prepare_post', 'wp_api_encode_acf', 10, 3);

```

Ví dụ sử dụng link sau để lấy JSON trả về
`http://yourdomain/wp-json/wp/v2/movies`


## Tạo React JS với CREATE REACT APP

* 
* 
*

##

## Nguồn tham khảo:
[Build Wordpress and React](https://codepen.io/jchiatt/post/headless-wordpress-with-react-complete-tutorial?utm_content=buffera9add&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer)